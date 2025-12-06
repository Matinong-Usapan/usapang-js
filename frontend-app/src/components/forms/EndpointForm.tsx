import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type EndpointFormProps = {};
type requestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface IFormInput {
  requestMethod: requestMethod
  requestUrl: string
  requestBody?: string
}

export default function EndpointForm({
    //children
    }: EndpointFormProps
    ) {

    const { 
        register, 
        watch,
        handleSubmit, 
        formState: { errors } 
    } = useForm<IFormInput>();

    const requestMethod = watch("requestMethod");

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return <div className={"endpoint-form ujs-container gap-y-[1em] flex flex-col h-fit"}>
        <div className={"flex gap-x-2"}>
            <select className={"ujs-select"} {...register("requestMethod")}>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
            <input type="text" {...register("requestUrl")} placeholder="Endpoint URL" className={"bg-gray-800 p-[0.5em] border border-gray-800 border-1 rounded-md"} />
        </div>
        {
        // Only render the request body textarea if the request method is POST
        requestMethod === "POST" && 
        <div className="flex">
            <textarea {...register("requestBody")} rows={5} placeholder="Request body" className={"bg-gray-800 w-full p-[0.5em] border border-gray-800 border-1 rounded-md"} />
        </div>
        }
        <div className="flex">
            <button onClick={handleSubmit(onSubmit)} className={"bg-gray-800 p-[0.5em] border border-gray-800 border-1 rounded-md"}>{"Send"}</button>  
        </div>
    </div>;
}
