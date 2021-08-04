import { useRouter } from "next/router";
import Link from "next/link";

const Customer = () => {
  const router = useRouter();
  const { id, showAddress } = router.query;

  return (
    <>
      <p>This is customer: {showAddress}</p>
      {serverSideEnviromentVariables()}
      <div
        style={{
          background: "violet",
          color: "white",
          width: "40px",
          height: "30px",
          marginLeft: "20px",
          textAlign: "center",
        }}
      >
        <Link href="/">
          <a>Hey</a>
        </Link>
      </div>
    </>
  );
};

const serverSideEnviromentVariables = () => {
  console.log(process.env.MIKEY_NAME);
};

export default Customer;
