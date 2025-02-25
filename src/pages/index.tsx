import Head from "next/head";
import SplitTheBill from "./SplitTheBill";

export default function Home() {
  return (
	<>
		<Head>
			<title>Split the Bill</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
      	</Head>
		<main>
			<SplitTheBill />
		</main>
    </>
  );
}
