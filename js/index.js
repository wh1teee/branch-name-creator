const branchInput = document.querySelector('.input-branch');
const branchResult = document.querySelector('.branch-result');
const branchResultInputForCopy = document.querySelector('.branch-result-for-copy');

const onBranchChange = (e) => {
    const inputValue = e.target.value;

    const branchNameResult = getBranchNameFromString(inputValue);

    setResult(branchNameResult)
    copyText();
}

branchInput.addEventListener('input', onBranchChange)

const getBranchNameFromString = (string) => {
    if (!string) {
        getMissingInputError()

        return;
    }

    return string.toLowerCase().replaceAll(' ', '-');
}

const getMissingInputError = () => {

}

const copyText = () => {
    branchResultInputForCopy.select();
    document.execCommand("copy");
    branchInput.focus();
}

const setResult = (value = '') => {
    branchResult.textContent  = value;
    branchResultInputForCopy.value = value;
}

