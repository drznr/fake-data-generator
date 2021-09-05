export {
    download
}

function download(data, filename) {
    const blob = new Blob([ data ], { type: 'octet/stream' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.json`;
    link.style.visibility = 'hidden';
    link.style.position = 'absolute';
    document.body.appendChild(link);

    link.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
}