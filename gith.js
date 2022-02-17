async function FetchGithubUsers() {

    let get = await fetch(`

    https://api.github.com/search/users?q=kout&in:user&page=34

    `, {
        headers: {
            Authorization: "Basic dfc2b0b60896724527e6:a08482c88376441a2b3a79a1984feac0720ba1cf"
        }
    });
    let response = await get.json();

    let data = await response

    console.log(data);

}

FetchGithubUsers();
