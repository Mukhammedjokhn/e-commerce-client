import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Button from "../../components/button/Button";

const Account = () => {
    const [tab, setTab] = useState<
        "profile" | "address" | "payment" | "return" | "cancel"
    >("profile");

    const menuSections = [
        {
            title: "Manage My Account",
            items: [
                { key: "profile", label: "My Profile" },
                { key: "address", label: "Address Book" },
                { key: "payment", label: "My Payment Options" },
            ],
        },
        {
            title: "My Orders",
            items: [
                { key: "return", label: "My Returns" },
                { key: "cancel", label: "My Cancellations" },
            ],
        },
    ];

    return (
        <div className="container py-20 pb-32">
            <div className="flex items-center justify-between">
                <Breadcrumb
                    breadcrumbLinks={[
                        { name: "My Account", path: "account-setting" },
                    ]}
                />

                <div className="flex items-center gap-2">
                    <p>Welcome !</p>
                    <p className="text-[var(--button)]">John Doe</p>
                </div>
            </div>

            <div className="mt-14 flex items-start justify-between gap-20">
                <div className="w-1/3 min-h-[300px]">
                    {menuSections.map((section, index) => (
                        <ul key={index}>
                            <p className="font-medium text-base mt-5">
                                {section.title}
                            </p>
                            {section.items.map(({ key, label }) => (
                                <li
                                    key={key}
                                    onClick={() => setTab(key as typeof tab)}
                                    className={`ml-5 mt-2 cursor-pointer transition-colors ${
                                        tab === key
                                            ? "text-[var(--button)]"
                                            : "text-[#333]"
                                    }`}
                                >
                                    {label}
                                </li>
                            ))}
                        </ul>
                    ))}
                    <ul className="font-medium text-base mt-5">My WishList</ul>
                </div>

                <div
                    className="w-full min-h-[630px] p-14"
                    style={{
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                >
                    <div>
                        <h1 className="text-xl font-medium text-[var(--button)]">
                            Edit Your Profile
                        </h1>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                            <div className="flex flex-col gap-2 mt-5">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="outline-none bg-[#eee] p-3.5 rounded text-sm w-full"
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-5">
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="outline-none bg-[#eee] p-3.5 rounded text-sm w-full"
                                    name="last_name"
                                    id="last_name"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="outline-none bg-[#eee] p-3.5 rounded text-sm w-full"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="outline-none bg-[#eee] p-3.5 rounded text-sm w-full"
                                    name="address"
                                    id="address"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="flex flex-col gap-2 col-span-2">
                                <label htmlFor="password_changes">
                                    Password Changes
                                </label>
                                <input
                                    type="text"
                                    placeholder="Current Password"
                                    className="outline-none bg-[#eee] p-3.5 rounded text-sm w-full"
                                    name="password_changes"
                                    id="password_changes"
                                    autoComplete="off"
                                />
                                <input
                                    type="text"
                                    placeholder="New Password"
                                    className="outline-none bg-[#eee] p-3.5 rounded text-sm w-full my-5"
                                    name="new_password"
                                    id="new_password"
                                    autoComplete="off"
                                />
                                <input
                                    type="text"
                                    placeholder="Confirm New Password"
                                    className="outline-none bg-[#eee] p-3.5 rounded text-sm w-full"
                                    name="confirm_password"
                                    id="confirm_password"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="flex items-center justify-end col-span-2 gap-5">
                                <button className="cursor-pointer">
                                    Cancel
                                </button>
                                <Button title="Save Changes" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
