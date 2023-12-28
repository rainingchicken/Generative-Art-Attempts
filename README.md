# attempt

Art Portfolio
I will be using this page to embed generative art from p5.js
I use the online p5.js editor at https://editor.p5js.org. By File > Share > Embed, I copied the link and pasted each art in index.html.

https://rainingchicken.github.io/Generative-Art-Attempts/

Fails:

1.
I tried making html read .js scripts directly, however, they would overwrite one another--the last loaded canvas would sit on top of the previously loaded ones. Therefore, I tried putting an ID on the canvas. However, it also failed because in CSS, there was really no way for me to get that ID and position them.

2.
I tried hard coding there the canvas would sit in a window. For example, canvas 1 would sit on potision (0, 0, absolute) abd canvas two on position (0, 400, abolute). However, still, only one canvas was active while the other was blank. Interacting with both canvases with a mouse works but it only works and shows on one canvas. So, I am giving up right now and just embed each art.
