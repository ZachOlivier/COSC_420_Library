#pragma strict

// Attach this script to anything that you need to have spin, you can can change each individual spin speed in the inspector panel

// Create a variable to store the rotation speed for the object
var rotateSpeed										: int = 200;

function Start () {
	
}

function Update () {
	// If the rotation is in the wrong direction, change the Vector3.up to either Vector3.down or .back or .forward until it is right
	this.transform.Rotate(Vector3.up * Time.deltaTime * rotateSpeed);
}