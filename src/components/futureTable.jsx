const FutureTable = ()=>{
    return(
        <div className="overflow-x-auto bg-[#32bb86] max-w-[700px]">
              <table className="min-w-full ">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-center text-lg font-medium text-black ">
                      Release Series
                    </th>
                    <th className="py-2 px-4 text-center text-lg font-medium text-black ">
                      Release Date
                    </th>
                    <th className="py-2 px-4 text-center text-lg font-medium text-black ">
                      End of Mainstream Support
                    </th>
                    <th className="py-2 px-4 text-center text-lg font-medium text-black ">
                      End of Extended Support
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      5.0
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      5.0.7
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      August 2024
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      April 2025
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      4.2 LTS
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      4.2.14
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      December 4, 2023
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      April 2026
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      5.0
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      5.0.7
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      August 2024
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      April 2025
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      4.2 LTS
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      4.2.14
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      December 4, 2023
                    </td>
                    <td className="py-2 px-4 text-lg font-custom text-black text-center">
                      April 2026
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    )
}

export default FutureTable;