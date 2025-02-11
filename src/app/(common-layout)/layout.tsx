import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default layout;