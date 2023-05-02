import { connectToDatabase } from "../../utils/mongo";

export default function Print({ data }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="text-left  mt-8">
      <div className="text-center mx-auto justify-center items-center">
        <h1 className="font-nexabold text-[#B9B611] text-[24px] sm:text-[18px]">
          MMMA INSPIRE FASHION ALLURE
        </h1>
        <h1 className="mb-6 font-nexaregular sm:text-[18px] text-[24px]">
          NO 72 Upper New Market Road Onitsha, 4th Floor Back
        </h1>
        <h2 className="underline-offset-1 underline font-nexabold text-[20px]">
          Registration Form Step 1
        </h2>
      </div>
      <form className="mt-6 text-[19px] leading-9 font-nexaregular">
        <div className="flex gap-4">
          <label>Surname:</label>
          <input
            className="focus:outline-none underline underline-offset-2 "
            value={data.firstName}
          />
          <div className="flex gap-4">
            <label>Othernames:</label>
            <input
              className="focus:outline-none underline w-full underline-offset-2 "
              value={data.lastName}
            />
          </div>
        </div>


        <div className="flex gap-4">
          <label>Email:</label>
          <input
            className="focus:outline-none underline underline-offset-2 "
            value={data.email}
          />
        </div>
      </form>
      {/* Add any additional fields that you want to display */}
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const data = await db.collection("formData").findOne();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
