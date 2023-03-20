// BEGIN
export default getDomainInfo = (site) => {
    const infoSite = {scheme:'',name:'',};
    if (site.startsWith('https')) {
        infoSite.scheme = 'https';
        infoSite.name = site.replace ('https://', '');
    }
    else {
        infoSite.scheme = 'http';
        infoSite.name = site.replace ('http://', '');
    }
    return infoSite;
}
// END