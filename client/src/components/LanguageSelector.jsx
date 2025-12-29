import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'gu', name: 'ગુજરાતી', flag: 'https://flagcdn.com/w40/in.png' },
    { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'nl', name: 'Nederlands', flag: 'https://flagcdn.com/w40/nl.png' },
    { code: 'bn', name: 'বাংলা', flag: 'https://flagcdn.com/w40/bd.png' },
    { code: 'ar', name: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
];

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('en');

    useEffect(() => {
        // Check for existing google translate cookie
        const existingCookie = Cookies.get('googtrans');
        if (existingCookie) {
            // cookie format is usually /source/target or just /target
            // e.g., /en/fr
            const langCode = existingCookie.split('/').pop();
            if (langCode && languages.find(l => l.code === langCode)) {
                setSelectedLang(langCode);
            }
        }
    }, []);

    const handleLanguageChange = (langCode) => {
        // Set the cookie that Google Translate looks for
        // Format: /source_lang/target_lang
        Cookies.set('googtrans', `/en/${langCode}`);
        // Also set for domain root if needed, sometimes helps
        Cookies.set('googtrans', `/en/${langCode}`, { domain: window.location.hostname });

        setSelectedLang(langCode);
        setIsOpen(false);

        // Reload to trigger translation
        window.location.reload();
    };

    const currentLang = languages.find(l => l.code === selectedLang) || languages[0];

    return (
        <div className="relative z-50">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-[#4a2c2a] text-white px-3 py-2 rounded hover:bg-[#3a2221] transition-colors"
            >
                <img
                    src={currentLang.flag}
                    alt={currentLang.name}
                    className="w-5 h-3.5 object-cover"
                />
                <span className="text-sm font-medium">{currentLang.name}</span>
                <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#f5f5f5] rounded-md shadow-lg py-1 border border-gray-200">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className="w-full text-left px-4 py-2 flex items-center gap-3 hover:bg-gray-200 transition-colors"
                        >
                            <img
                                src={lang.flag}
                                alt={lang.name}
                                className="w-5 h-3.5 object-cover shadow-sm"
                            />
                            <span className="text-sm text-gray-800 font-medium">{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
