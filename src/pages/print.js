import { connectToDatabase } from '../utils/mongo';

export default function Print({ data }) {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <h1>Submitted Data:</h1>
      <p>Name: {data.firstName}</p>
      <p>Email: {data.email}</p>
      <p>Message: {data.message}</p>
      {/* Add any additional fields that you want to display */}
      <button onClick={handlePrint} >Print</button>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const data = await db.collection('formData').findOne();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
