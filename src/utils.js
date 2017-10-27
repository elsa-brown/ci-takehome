// Ant-win likelihood algorithm:
function generateAntWinLikelihoodCalculator() {
	var delay = 7000 + Math.random() * 7000;
	var likelihoodOfAntWinning = Math.random();

  return function(callback) {
    setTimeout(function() {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}

// Attempt at using PriorityQueue to rank ants in order, as their respective likelihoods of winning are calculated:
class Node {
	constructor (data, priority) {
	this.data = data;
	this.priority = priority;
	this.next = null;
	}
}

class PriorityQueue {
	constructor() {
		this.head = null;
	}

	insert(data, priority) {	
		const node = new Node(data, priority);

		if (!this.head || node.priority > this.head) {
			const prev = this.head;
			this.head = node;
			node.next = prev;
		} else {
			let current = this.head;
			while (node.priority < current.priority && current.next) {
				current = current.next;
			}
			node.next = current.next;
			current.next = node;
		}
	}

	popMax() {
		let max = this.head.data;
		this.head = this.head.next;
		return max;
	}
}

export { generateAntWinLikelihoodCalculator, PriorityQueue };