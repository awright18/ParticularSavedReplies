var currentUrl;

const setCurrentActiveURL = async (url, callback) =>{  
    
    await chrome.storage.local.set({ [`currentActiveUrl`]: url });
    
    console.log("currentUrl changed", currentUrl);
    
    if(callback !== undefined){

        callback();
    }
} 

const getCurrentActiveURL = async () =>{

    const results =  await chrome.storage.local.get([`currentActiveUrl`]);

    return results[`currentActiveUrl`];
}

const isGitHubIssueUrl = (url) => {

    if(url === null){
       url = window.location.href;
    }

    let pattern = /^(https?:\/\/)github\.com\/.+\/.+\/issues\/\d+/i;

    return pattern.test(url);
}

const isGitHubPullRequestUrl = (url) => {

    if(url === null){
        url = window.location.href;
     }

    let pattern = /^(https?:\/\/)github\.com\/.+\/.+\/pull\/\d+/i;

    return pattern.test(url);
}

const isLocalhostUrl = (url) => {
    
    if(url === null){
        url = window.location.href;
    }

    let pattern = /^(https?:\/\/)localhost(:\d+).*/i;

    return pattern.test(url);
}

const getGitHubOwner = (url) => {
    
    if(url === null){
        url = window.location.href;
    }

    const expression = /https:\/\/github.com\/(?<owner>[^\/]+)?(.*)/i

    const matches = url.match(expression);

    const owner = matches?.groups['owner'];

    return owner;
}

const canLoadRepliesForUrl = (config,url) => {

    console.log("evaluating can load replies from url", url);

    if(url === null){
        url = window.location.href;
    }

    //this if for unit tests
    if(isLocalhostUrl(url)){
        return true;
    }

    const gitHubOwner = getGitHubOwner(url);

    if(gitHubOwner === undefined){
        return false;
    }

    const validOwner = config.allowEverywhere || gitHubOwner.localeCompare(config.limitToGitHubOwner,undefined,{ sensitivity : `base`}) === 0 ? true : false;

    console.log("validOwner",validOwner);

    const validForIssue = (isGitHubIssueUrl(url) && config.includeIssues);

    console.log("validForIssue",validForIssue);

    const validForPullRequest = (isGitHubPullRequestUrl(url) && config.includePullRequests);

    console.log("validForPullRequest",validForPullRequest);

    if (validOwner
        && (validForIssue || validForPullRequest)) {

        return true;
    }

    return false;
}

