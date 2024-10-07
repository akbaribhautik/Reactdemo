import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiActionCreator } from "../redux/ApiActionCreator"
  
  export default function Dashboard() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state?.apiReducer?.data)
  

    useEffect(() => {
      dispatch(apiActionCreator())
      return () => {
        
      }
    }, [])
    
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {data?.map((item) => (
          <li key={item?.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item?.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item?.email}</p>
              </div>
            </div>     
          </li>
        ))}
      </ul>
    )
  }