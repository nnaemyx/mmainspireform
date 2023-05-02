import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router';

const Registerform = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName : "", 
    lastName : "",  
    email : "",  
    dateofbirth : "",  
    address : "",  
    city : "",  
    state : "",  
    postalcode : "",  
    country : "", 
    phoneNumber : "", 
    choose : "", 
    signature : "", 
    maritalStatus : "", 
    religion : "", 
  })
  const router = useRouter();
  
  const maxDate = new Date().toISOString().slice(0, 10) // get today's date in ISO format
  const minDate = '1970-01-01'

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    // submit the form data to the server
    e.preventDefault();

    // Submit form data to MongoDB database
    const res = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/print');
    }
  }

  return (
    <>
    {step === 1 && (
    <div className="text-center px-6  mt-[4rem] ">
      <div className="text-center mx-auto justify-center items-center">
        <h1 className="font-nexabold text-[#B9B611] text-[24px] sm:text-[18px]">MMMA INSPIRE FASHION ALLURE</h1>
        <h1 className="mb-6 font-nexaregular sm:text-[18px] text-[24px]">NO 72 Upper New Market Road Onitsha, 4th Floor Back</h1>
        <h2 className="underline-offset-1 underline font-nexabold text-[20px]">Registration Form Step 1</h2>
      </div>
      <form onSubmit={handleNext} className="flex 2xl:mx-[23rem] mt-3 sm:mx-0 flex-col" >
       
          <input
            type="text"
            placeholder="SURNAME"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-solid py-2 px-2 mb-4 focus:outline-none"
          />
       
          <input
            type="text"
            value={formData.lastName}
            name="lastName"
            onChange={handleChange}
            placeholder="OTHERNAMES"
            className="border border-solid py-2 px-2 mb-4 focus:outline-none"

          />
          <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="EMAIL ADDRESS"
          onChange={handleChange}
          className="border border-solid py-2 px-2 mb-4 focus:outline-none"

          />
          <input 
          type="date"
          name='dateofbirth' 
          min={minDate} max={maxDate} 
          placeholder="DATE OF BIRTH"
          value={formData.dateofbirth}
          className="border border-solid py-2 px-2 mb-4 focus:outline-none"
          onChange={handleChange}
          />
          <input
          type="text"
          name='address'
          placeholder="STREET ADDRESS"
          value={formData.address}
          onChange={handleChange}
          className="border border-solid py-2 px-2 mb-4 focus:outline-none"

          />
          <input
          type="text"
          name='city'
          placeholder="CITY"
          value={formData.city}
          className="border border-solid py-2 px-2 mb-4 focus:outline-none"
          onChange={handleChange}
          />
          <input
          type="text"
          name='state'
          placeholder="STATE"
          value={formData.state}
          onChange={handleChange}
          className="border border-solid py-2 px-2 mb-4 focus:outline-none"

          />
          <input
          type="number"
          name='postalcode'
          placeholder="POSTAL CODE"
          value={formData.postalcode}
          onChange={handleChange}
          className="border border-solid py-2 px-2 mb-4 focus:outline-none"

          />
          <input
          type="text"
          name='country'
          placeholder="COUNTRY"
          onChange={handleChange}
          value={formData.country}
          className="border border-solid py-2 px-2 mb-4 focus:outline-none"

          />
          <input
          type="number"
          name='phoneNumber'
          placeholder="PHONE NUMBER"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="border border-solid appearance-none py-2 px-2 mb-4 focus:outline-none"

          />
        <button type="submit" className="bg-black text-[18px] font-nexabold py-2 mb-4 text-[#B9B611]">Next</button>
      </form>
    
    
    </div>
  )}
    {step === 2 && (
    <div className="text-center px-6  mt-[4rem] ">
      <div className="text-center mx-auto justify-center items-center">
        <h1 className="font-nexabold text-[#B9B611] text-[24px] sm:text-[18px]">
          MMMA INSPIRE FASHION ALLURE
        </h1>
        <h1 className="mb-6 font-nexaregular sm:text-[18px] text-[24px]">
          NO 72 Upper New Market Road Onitsha, 4th Floor Back
        </h1>
        <h2 className="underline-offset-1 underline font-nexabold text-[20px]">
          Step 2
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex 2xl:mx-[23rem] mt-3 sm:mx-0 flex-col"
      >
        <label className="text-left font-nexaregular">Why do you choose to be a fashion designer?</label>
        <input
          type="textarea"
          name='choose'
          value={formData.choose}
          onChange={handleChange}
          className="border border-solid py-2 px-2 mb-4 focus:outline-none"
        />

        <label className="text-left font-nexaregular">Signature</label>
        <input
          type="text"
          name='signature'
          value={formData.signature}
          placeholder='Print it out and sign here.'
          onChange={handleChange}
          className="border border-solid py-2 px-2 mb-4 pointer-events-none focus:outline-none"
        />
        <input
          type="text"
          name='religion'
          value={formData.religion}
          placeholder="RELIGION"
          onChange={handleChange}
          className="border border-solid py-2 px-2 mb-4 focus:outline-none"
        />
        <input
          type="text"
          name='maritalStatus'
          placeholder="MARITAL STATUS"
          value={formData.maritalStatus}
          className="border border-solid py-2 px-2 mb-4 focus:outline-none"
          onChange={handleChange}
        />
        <div className="flex items-start text-left leading-4 gap-2 mb-4 font-nexaregular text-[14px]">
          <input
          required
          type="checkbox"
          />
          <p>
            By checking this box, i certify that my answers are true and completeto the best of my knowledge.
          </p>
        </div>
        <button
        onClick={handlePrev}
          
          className="bg-black text-[18px] font-nexabold py-2 mb-4 text-[#B9B611]"
        >
          Previous
        </button>
        <button
            type="submit"
            className="bg-black  text-[#B9B611] font-nexabold py-2 text-[18px]"
          >
            Submit
          </button>
       
      </form>
    </div>
  )}
  </>
  )
}

export default Registerform