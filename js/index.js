const branchInput = document.querySelector('.input-branch');
const branchResult = document.querySelector('.branch-result');

const onBranchChange = async (e) => {
    const inputValue = e.target.value;
    const branchNameResult = getBranchNameFromString(inputValue);

    setResult(branchNameResult);
    await copyText(branchNameResult);
};

branchInput.addEventListener('input', onBranchChange);

const getBranchNameFromString = (string) => {
    if (!string) {
        getMissingInputError();

        return;
    }

    return string.toLowerCase().replaceAll(' ', '-');
};

const getMissingInputError = () => {

};

const copyText = async (text = '') => {
    return await navigator.clipboard.writeText(text);
};

const setResult = (value = '') => {
    branchResult.textContent = value;
};

const readClipboardFromDevTools = async (callback) => {
    return new Promise((resolve, reject) => {
        const _asyncCopyFn = (async (callback) => {
            try {
                const value = await navigator.clipboard.readText();
                resolve(value);
                callback(value);
            } catch (e) {
                reject(e);
            }
        });

        window.addEventListener("focus", () => _asyncCopyFn(callback));
    });
};

const onPageInFocus = async (value) => {
    const resultBranchName = getBranchNameFromString(value);
    setResult(resultBranchName);
    await copyText(resultBranchName);
};

(async () => {
    await readClipboardFromDevTools(onPageInFocus);
})();
