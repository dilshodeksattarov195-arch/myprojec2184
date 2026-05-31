const smsVarseConfig = { serverId: 8367, active: true };

const smsVarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_8367() {
    return smsVarseConfig.active ? "OK" : "ERR";
}

console.log("Module smsVarse loaded successfully.");