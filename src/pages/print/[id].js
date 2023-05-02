import { getFormById } from '../../utils/mongo';

function PrintPage({ formData }) {
  // Assuming you have access to the form data
  const { firstName='', lastName, email } = formData;

  return (
    <div>
      <h1>Printable Form Details</h1>
      <p>Name: {firstName} {lastName}</p>
      <p>Email: {email}</p>
      {/* Add more form fields here as needed */}
      <button onClick={() => window.print()}>Print Form</button>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const formId = params.id;
  const formData = await getFormById(formId);
  return { props: { formData } };
}

export default PrintPage;
