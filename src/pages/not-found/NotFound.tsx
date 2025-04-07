import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Button from "../../components/button/Button";

const NotFound = () => {
    const breadcrumb: BreadcrumbPropsType[] = [
        {
            name: "404 Error",
            path: "/not-found"
        }
    ];
    const navigate = useNavigate();
    return (
        <div className='container pt-20'>
            <Breadcrumb breadcrumbLinks={breadcrumb} />
            <div className='p-32 flex items-center flex-col gap-12'>
                <h1 className='font-medium text-[110px]'>404 Not Found</h1>
                <p className='text-base'>
                    Your visited page not found. You may go home page.
                </p>
                <Button
                    title='Back to home page'
                    onClick={() => navigate("/")}
                />
            </div>
        </div>
    );
};
export default NotFound;
