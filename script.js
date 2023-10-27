// Function to remove duplicates from an array.
function removeDuplicates(arr) {
	const filteredItemsSet = new Set(arr.map(item => item.toLowerCase()));
	return Array.from(filteredItemsSet);
}

// Example of using the function.
const arr1 = ['html', 'css', 'html', 'js'];
const arr2 = ['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss'];
const arr3 = ['html', 'css', 'html', 'HTML', 'js']; // Added an uppercase duplicate.
const cleanedArray1 = removeDuplicates(arr1);
const cleanedArray2 = removeDuplicates(arr2);
const cleanedArray3 = removeDuplicates(arr3);

// Outputing the result to the console.
console.log(`Cleaned Array1:`, cleanedArray1);
console.log(`Cleaned Array2:`, cleanedArray2);
console.log(`Cleaned Array3:`, cleanedArray3);