import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import axios from "../../utils/axios";
import { useMemo } from "react";

type EndpointFormProps = {};
type requestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface IFormInput {
  requestMethod: requestMethod
  requestUrl: string
  requestBody?: string
  includeBaseUrl: boolean
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
    } = useForm<IFormInput>({
        defaultValues: {
            includeBaseUrl: true
        }
    });

    const requestMethod = watch("requestMethod");
    const includeBaseUrl = watch("includeBaseUrl");

    const onSubmit: SubmitHandler<IFormInput> = ({
        requestMethod,
        requestUrl,
        requestBody
    }) => {
        const config = {
            /**
             * If includeBaseUrl is true, set allowAbsoluteUrls to false,
             * forcing axios to always prepend the request URL with the default base URL
             */
            allowAbsoluteUrls: !includeBaseUrl
        }

        const sanitizedUrl = requestUrl.trim().toLowerCase();

        // If the request URL looks like an absolute URL and includeBaseUrl is true, throw an error to the form,
        // informing the user of a possible user error
        if (includeBaseUrl && (sanitizedUrl.startsWith("http://") || sanitizedUrl.startsWith("https://"))) {
            
        }

        if (requestMethod === "GET") {
            axios.get(requestUrl, config).then((res) => {
                console.log(res);
            });
        }
        else if (requestMethod === "POST") {
            axios.post(requestUrl, requestBody, config).then((res) => {
                console.log(res);
            });
        }
        else if (requestMethod === "DELETE") {
            axios.delete(requestUrl, config).then((res) => {
                console.log(res);
            });
        }
    }

    const methodSelector = useMemo(() => {
        return (
            <select className={"ujs-select"} {...register("requestMethod")}>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                {/* <option value="PUT">PUT</option> */}
                <option value="DELETE">DELETE</option>
            </select>
        );
    }, []);

    const requestBodySection = useMemo(() => {
        return (
            // Only render the request body textarea if the request method is POST
            requestMethod === "POST" && 
            <div className="flex">
                <textarea {...register("requestBody")} rows={5} placeholder="Request body" className={"w-full ujs-input"} />
            </div>
        );
    }, [
        requestMethod === "POST" // Only rerender if this condition evaluates to a different value
        /**
         * The reason why this is not simply '[requestMethod]' is because we also want to skip rerendering 
         * if requestMethod changes from one non-POST value to another (like from GET to DELETE),
         * which we know should both result in not rendering the textarea anyway
         */ 
    ]);

    const requestUrlSection = useMemo(() => {
        return (
            <div className={"ujs-input flex p-0!"}>
                {includeBaseUrl && 
                <input 
                    type="text" 
                    className={"text-yellow-200 p-[0.5em] pr-0 field-sizing-content"} 
                    value={axios.defaults.baseURL} 
                    inert 
                    readOnly
                />}
                <input type="text" {...register("requestUrl")} placeholder="/endpointURL" className={"p-[0.5em]"} />
            </div>
        );
    }, [
        includeBaseUrl
    ]);

    return <div className={"endpoint-form ujs-container gap-y-[1em] flex flex-col h-fit"}>
        <div className={"flex gap-x-2"}>
            {methodSelector}
            {requestUrlSection}
            <div className="flex">
                <button onClick={handleSubmit(onSubmit)} className={"p-[0.5em] border border-gray-800 border-1 rounded-md"}>{"Send"}</button>  
            </div>
        </div>
        <div className={"flex gap-x-[0.3em] mt-[-0.5em] text-gray-700 text-sm"}>
            <input type="checkbox" {...register("includeBaseUrl")} className={""} />
            <label htmlFor={"includeBaseUrl"} className={""}>{"Use default base URL"}</label>
        </div>
        {requestBodySection}
    </div>;
}
