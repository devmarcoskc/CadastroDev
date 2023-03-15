export const sendFormContextRequest = async(currentStep: number, name: string, level: number, email:string, github:string) => {
    /*Fake API*/
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            currentStep : currentStep,
            name: name,
            level: level,
            email: email,
            github: github
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });
    let json = await response.json();
    return json;
}