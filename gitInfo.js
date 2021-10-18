/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "A free, open-source, simple version control system used to collaborate with other devs."
console.log(gitDefinition)
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "Internet based remote hosting for version control Git, storage for other devs to access and communicate through."
console.log(gitHubDefinition)
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {
    description: `Create empty Git repo in specified directory. Run with no
    arguments to initialize the current directory as a git repository`,

    code: "git init",
}
console.log(init)
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = {
    description: `Clone repo located at repo onto local machine. Original repo can be
    located on the local filesystem or on a remote machine via HTTP or SSH.`,

    code: "git clone"
}
console.log(clone)
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = {
    description: `List which files are staged, unstaged, and untracked.`,

    code: "git status"
}
console.log(status)
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {
    description: 'Stage all changes in directory for the next commit.Replace directory with a file to change a specific file.',

    code: "git add ."
}
console.log(add)
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {
    description: `Commit the staged snapshot, but instead of launching a text editor, use message as the commit message.`,
    code: "git commit -m"
}
console.log(commit)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {
    description: `Push the branch to remote, along with necessary commits and objects. Creates named branch in the remote repo if it doesn’t exist.`,

    code: "git push"
}
console.log(push)