import React, {useEffect} from "react";
// import Intercom from "intercom-react";

const IntercomSupport = () => {
  
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widget.intercom.io/widget/zibjcyyp';
        script.async = true;
        script.onload = () => {
            window.Intercom('boot', {app_id: 'fyq3wodw'});
        };
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
  
    return (
    <></>
  );
};

export default IntercomSupport;
