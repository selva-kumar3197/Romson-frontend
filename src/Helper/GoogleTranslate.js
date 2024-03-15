import React, { useEffect, useState } from 'react';
import { SelectPicker } from 'rsuite';
import { getCookie, hasCookie, setCookie } from 'cookies-next';

function GoogleTranslate() {
    const [selected, setSelected] = useState(null);

    const languages = [
        { label: 'English', value: '/auto/en' },
        { label: 'Русский', value: '/auto/ru' },
        { label: 'Polski', value: '/auto/pl' },
    ];

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

        // Set initial value for selected
        if (hasCookie('googtrans')) {
            setSelected(getCookie('googtrans'));
        } else {
            setCookie('googtrans', '/auto/en');
            setSelected('/auto/en');
        }
    }, []);

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'auto',
                autoDisplay: false,
                includedLanguages: 'ru,en,pl',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
        );
    };

    const langChange = (e, m, evt) => {
        evt.preventDefault();

        if (hasCookie('googtrans')) {
            setCookie('googtrans', decodeURI(e));
            setSelected(e);
        } else {
            setCookie('googtrans', e);
            setSelected(e);
        }

        // Get the Google Translate iframe and update its language
        const translateIframe = document.querySelector('.goog-te-menu-frame');
        if (translateIframe) {
            const innerDoc = translateIframe.contentDocument || translateIframe.contentWindow.document;
            const langDropdown = innerDoc.querySelector('.goog-te-combo');
            if (langDropdown) {
                langDropdown.value = e;
                langDropdown.dispatchEvent(new Event('change'));

                // Trigger the language change directly on the Google Translate iframe
                const translateButton = innerDoc.querySelector('.goog-te-button');
                if (translateButton) {
                    translateButton.click();
                }
            }
        }
    };
    
    return (
        <>
            {/* <div id="google_translate_element" style={{ width: '0px', height: '0px', position: 'absolute', left: '50%', zIndex: -99999 }}></div> */}
            <SelectPicker
                data={languages}
                style={{ width: 100 }}
                placement="bottomEnd"
                cleanable={false}
                value={selected}
                searchable={false}
                className={'notranslate'}
                menuClassName={'notranslate'}
                onSelect={(e, m, evt) => langChange(e, m, evt)}
                placeholder="Lang"
            />
        </>
    );
}

export default GoogleTranslate;