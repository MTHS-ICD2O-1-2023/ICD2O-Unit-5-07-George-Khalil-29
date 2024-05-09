// Copyright (c)2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

function calculateSum() {
  const n = parseInt(document.getElementById("numberInput").value)

  if (!isNaN(n) && n > 0) {
    const sum = (n / 2) * (n + 1)

    // Using a for loop to add up numbers from 1 to the entered integer
    for (let i = 1; i <= n; i++) {
      sum += i
    }
    document.getElementById("result").innerHTML =
      "The sum of numbers from 1 to " + n + " is " + sum + "."
  } else {
    document.getElementById("result").innerHTML =
      "Please enter a positive integer."
  }
}