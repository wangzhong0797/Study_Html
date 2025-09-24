/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!!!";
*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/METRO_CN.jpg") {
		myImage.setAttribute("src", "images/fresh.jpg");
	} else {
		myImage.setAttribute("src", "images/METRO_CN.jpg");
	}	
};

// 设置个性化欢迎信息的函数
// setUserName() 函数包含一个 prompt() 函数，与 alert() 类似会弹出一个对话框。prompt() 函数的功能更多，需要用户输入数据，并在用户点击确定后将数据存储在一个变量中。在这个例子里，我们要求用户输入一个名字。接下来，代码调用 localStorage API，它允许我们将数据存储在浏览器中并供后续获取。我们使用 localStorage 的 setItem() 函数创建并存储一个'name' 的数据项，并将它的值设置为包含用户名的 myName 变量。最后将标题的 textContent 属性设置为带有用户新设置的名字的字符串。

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	const myName = prompt("Please enter your name.");
	// 如果 myName 没有值，就再次从头运行setUserName()。如果有值（如果上面的表达式不为真），就把值存储到 localStorage 并设置为标题文本。
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Mozilla is cool, ${myName}`;
	}
}

// 初始化代码: 这里的第一行使用取非运算符（逻辑非，用 ! 表示）检测 name 数据是否存在。若不存在，调用 setUserName() 创建 name 数据。若存在（即用户上次访问时设置了用户名），调用 getItem() 获取保存的名字，然后像 setUserName() 中那样设置标题的 textContent。
if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

//设置按钮 onclick 事件处理器。
myButton.onclick = function() {
	setUserName();
}

