import React, { useContext } from 'react';
import WinPrint from '../../utility/WinPrint';
import { ResumeContext } from '../../builder';
import FormCloseOpenBtn from '../../FormCloseOpenBtn';

const Header = () => {
    const { formClose, setFormClose } = useContext(ResumeContext);

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-[#0a66c2] shadow-lg z-50 exclude-print">
            <div className="flex justify-between items-center px-6 py-4">
                <h1 className="text-2xl font-bold text-white">JopSpark</h1>
                <div className="flex items-center gap-4">
                    <WinPrint />
                    <FormCloseOpenBtn formClose={formClose} setFormClose={setFormClose} />
                </div>
            </div>
        </header>
    );
};

export default Header;
