import { useAccount, useApi, useAlert } from "@gear-js/react-hooks";
import { web3FromSource } from "@polkadot/extension-dapp";
import { decodeAddress, getProgramMetadata } from "@gear-js/api";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";

interface Props {
  to: string;
  amount: number;
  onClose: () => void;
  fetch: (wallet: any) => void;
}

function TransferButton(props: Props) {
  const alert = useAlert();
  const toast = useToast();
  const { account, accounts } = useAccount();
  const { api } = useApi();

  // Add your programID
  const programIDFT =
    "0xa0380ba76b879b445b1855c5392ff945d44e2530f57e181c67c70daa2b28dc4a";

  // Add your meta.txt
  const meta =
    "0100000000000103000000010700000000000000000108000000a90b3400081466745f696f28496e6974436f6e66696700000c01106e616d65040118537472696e6700011873796d626f6c040118537472696e67000120646563696d616c73080108753800000400000502000800000503000c081466745f696f204654416374696f6e000118104d696e74040010011075313238000000104275726e040010011075313238000100205472616e736665720c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380002001c417070726f7665080108746f14011c4163746f724964000118616d6f756e74100110753132380003002c546f74616c537570706c790004002442616c616e63654f66040014011c4163746f724964000500001000000507001410106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001801205b75383b2033325d0000180000032000000008001c081466745f696f1c46544576656e74000110205472616e736665720c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380000001c417070726f76650c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380001002c546f74616c537570706c790400100110753132380002001c42616c616e63650400100110753132380003000020081466745f696f3c496f46756e6769626c65546f6b656e00001801106e616d65040118537472696e6700011873796d626f6c040118537472696e67000130746f74616c5f737570706c791001107531323800012062616c616e6365732401505665633c284163746f7249642c2075313238293e000128616c6c6f77616e6365732c01905665633c284163746f7249642c205665633c284163746f7249642c2075313238293e293e000120646563696d616c730801087538000024000002280028000004081410002c00000230003000000408142400";

  const metadata = getProgramMetadata(`0x${meta}`);

  const message: any = {
    destination: programIDFT, // programId
    payload: {
      transfer: [
        decodeAddress(account!.address),
        decodeAddress(props.to),
        props.amount,
      ],
    },
    gasLimit: 899819245,
    value: 0,
  };

  const signer = async () => {
    const localaccount = account?.address;
    const isVisibleAccount = accounts.some(
      (visibleAccount) => visibleAccount.address === localaccount
    );

    if (isVisibleAccount) {
      // Create a message extrinsic
      const transferExtrinsic = api.message.send(message, metadata);

      const injector = await web3FromSource(accounts[0].meta.source);

      transferExtrinsic
        .signAndSend(
          accounts[0].address,
          { signer: injector.signer },
          ({ status }) => {
            console.log(accounts);

            const postDonation = {
              userWallet: accounts[0].address,
              companyWallet: props.to,
              quantity: props.amount,
              block: status.asInBlock.toString(),
              date: new Date(),
            };
            axios
              .post("http://localhost:80/donacion", postDonation)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });

            console.log(status);
            if (status.isInBlock) {
              toast({
                title: "Donation made",
                description: "We've successfully made the donation for you.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              props.fetch(props.to);
              // alert.success(`Block hash #${status.asInBlock.toString()}`);
            } else {
              if (status.type === "Finalized") {
                // alert.success(status.type);
              }
            }
          }
        )
        .catch((error: any) => {
          console.log(":( transaction failed", error);
        });
    } else {
      alert.error("Account not available to sign");
    }
    props.onClose();
  };

  return (
    <Button onClick={() => signer()} background="#37a0ea" color="white">
      Donate
    </Button>
  );
}

export { TransferButton };
