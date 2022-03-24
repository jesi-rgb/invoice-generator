import type { NextPage } from 'next'

const Form: NextPage = () => {
  return (
    <div className="">
      <div className="body-font relative text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-3 flex w-full flex-col text-left">
            <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
              Form
            </h1>
            <p className="mx-auto text-center text-xl leading-relaxed lg:w-2/3">
              Customer information
            </p>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap text-left">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="custumer_name"
                    name="custumer_name"
                    placeholder="Anonymous"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="custumer_email"
                    name="custumer_email"
                    placeholder="example@gmail.com"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="custumer_phone"
                    name="custumer_phone"
                    placeholder="+34 888 88 88 88"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Country
                  </label>
                  <input
                    type="text"
                    id="custumer_country"
                    name="custumer_country"
                    placeholder="Spain"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Address
                  </label>
                  <input
                    type="text"
                    id="custumer_address"
                    name="custumer_address"
                    placeholder="123 Main Street, New York 10030, USA"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>

              <p className="mx-auto mt-7 mb-3 text-center text-xl leading-relaxed lg:w-2/3">
                Company information
              </p>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    placeholder="Anonymous"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="company_email"
                    name="company_email"
                    placeholder="example@gmail.com"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    DNI/CIF
                  </label>
                  <input
                    type="text"
                    id="company_dni"
                    name="company_dni"
                    placeholder="11223344H"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="company_phone"
                    name="company_phone"
                    placeholder="+34 888 88 88 88"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Country
                  </label>
                  <input
                    type="text"
                    id="company_country"
                    name="company_country"
                    placeholder="Spain"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Upload logo image
                  </label>
                  <button className="mx-auto flex rounded border-0 bg-gray-600 py-2 px-8 text-white hover:bg-gray-700 focus:outline-none">
                    Upload
                  </button>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Address
                  </label>
                  <input
                    type="text"
                    id="company_address"
                    name="company_address"
                    placeholder="123 Main Street, New York 10030, USA"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <p className="mx-auto mt-7 mb-3 text-center text-xl leading-relaxed lg:w-2/3">
                Bank details
              </p>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="bank_name"
                    name="bank_name"
                    placeholder="JPMORGAN BANK"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    IBAN
                  </label>
                  <input
                    type="text"
                    id="iban"
                    name="iban"
                    placeholder="ES91 2100 0418 4502 0005 1332"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Swift
                  </label>
                  <input
                    type="text"
                    id="swift"
                    name="swift"
                    placeholder="CHASUS33XXX"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label className="text-sm leading-7 text-gray-600">
                    Address
                  </label>
                  <input
                    type="text"
                    id="company_address"
                    name="company_address"
                    placeholder="123 Main Street, New York 10030, USA"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
