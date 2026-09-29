class MedianFinder {
    constructor() {
        this.small = new PriorityQueue((a, b) => b - a)
        this.large = new PriorityQueue((a, b) => a - b)
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.small.enqueue(num)
        this.large.enqueue(this.small.dequeue())

        if (this.large.size() > this.small.size()) {
            this.small.enqueue(this.large.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        return this.small.size() > this.large.size() ? this.small.front() : (this.small.front() + this.large.front()) / 2
    }
}
