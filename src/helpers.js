/** choice takes an array of items and returns an item found at a random
 * index of that array
 */

function choice(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

/** remove takes an array of items and a single item as inputs. It returns
 * an array with the first instance of item removed, or undefined if the input
 * array does not contain the specified item
 */

function remove(items, item) {
  const itemIndex = items.indexOf(item);
  if (itemIndex !== -1) {
    return items.splice(itemIndex, 1);
  }
  else {
    return undefined;
  }
}

export {choice, remove};