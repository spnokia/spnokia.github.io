let port;

function connect() {
    (async () => {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });
    })();
}

function disconnect() {
    (async () => {
        await port.close();
    })();
}

function ckpd(k) {
    (async () => {
        const writer = port.writable.getWriter();
        await writer.write(new TextEncoder().encode(`AT+CKPD="${k}"\r\n`));
        writer.releaseLock();
    })();
}