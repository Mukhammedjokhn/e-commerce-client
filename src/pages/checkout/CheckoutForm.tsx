import { Asterisk } from "lucide-react";

type InputType = {
    label: string;
    required: boolean;
    value: string;
};

const CheckoutForm = () => {
    const checkoutInputs: InputType[] = [
        {
            label: "First Name",
            required: true,
            value: "first_name",
        },
        {
            label: "Company Name",
            required: false,
            value: "company_name",
        },
        {
            label: "Street Address",
            required: true,
            value: "street_address",
        },
        {
            label: "Apartment, floor, etc.",
            required: false,
            value: "apartment",
        },
        {
            label: "Town/City",
            required: true,
            value: "town_city",
        },
        {
            label: "Phone Number",
            required: true,
            value: "phone_number",
        },
        {
            label: "Email Address",
            required: true,
            value: "email_address",
        },
    ];
    return (
        <div className="min-h-[800px] w-full">
            {checkoutInputs.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 mt-5">
                    <div className="flex items-start gap-1 text-[var(--foreground-grey)] mt-2">
                        <label htmlFor={item.value}>{item.label}</label>
                        {item.required ? (
                            <div className="text-[var(--red)] mt-1">
                                <Asterisk size={10} />
                            </div>
                        ) : (
                            <p>( optional )</p>
                        )}
                    </div>
                    <input
                        type="text"
                        className="outline-none bg-[#eee] p-3.5 rounded text-sm w-full"
                        name={item.value}
                        id={item.value}
                        autoComplete="off"
                    />
                </div>
            ))}
            <div className="flex items-center gap-2 mt-5  select-none">
                <input
                    type="checkbox"
                    name="accept"
                    id="accept"
                    checked
                    className="w-5 h-5 accent-[var(--button)] cursor-pointer rounded outline-none"
                />
                <label htmlFor="accept" className="cursor-pointer">
                    Save this information for faster check-out next time
                </label>
            </div>
        </div>
    );
};
export default CheckoutForm;
