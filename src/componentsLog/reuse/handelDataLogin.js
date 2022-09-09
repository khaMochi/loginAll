function handelDataLoginAngSingupFbGg(data,provider='google') {
    const provider_id=data.user.providerData[0].uid;
    const email =data.user.email;
    const display_name=data.user.displayName;

    const Bodydata= {
        provider_id,email,display_name,provider,lang:'vn',
        device_type:4
    }
    const headers={
        PrivateKey:'M0ch1M0ch1_En_$ecret_k3y',
        DeviceType:4,
    }
    

    return {Bodydata,headers};
 }
export default handelDataLoginAngSingupFbGg;