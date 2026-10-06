// explaining the this keyword
// ============================================
// QUAD TREE NODE
// ============================================

class QuadTreeNode {

    constructor(x, y, width, height, capacity = 4) {

        // 1. this.x
        // "this" refers to the CURRENT QuadTreeNode object.
        // Store the node's x-coordinate.
        this.x = x;

        // 2. this.y
        // Store the node's y-coordinate.
        this.y = y;

        // 3. this.width
        // Store the width of THIS quadrant.
        this.width = width;

        // 4. this.height
        // Store the height of THIS quadrant.
        this.height = height;

        // 5. this.capacity
        // Maximum number of points before splitting.
        this.capacity = capacity;

        // 6. this.points
        // Each node keeps its own array of points.
        this.points = [];

        // 7. this.divided
        // Tells us whether THIS node has been divided
        // into four smaller quadrants.
        this.divided = false;

        // 8. this.northWest
        // Reference to THIS node's northwest child.
        this.northWest = null;

        // 9. this.northEast
        // Reference to THIS node's northeast child.
        this.northEast = null;

        // 10. this.southWest / this.southEast
        // These will eventually reference THIS node's
        // remaining two child quadrants.
        this.southWest = null;
        this.southEast = null;
    }


    // ============================================
    // INSERT A POINT
    // ============================================

    insert(point) {

        // "this" is the QuadTreeNode receiving the
        // insert() call.

        // Example:
        // root.insert(point)
        //
        // Inside insert(), this === root.

        if (!this.contains(point)) {
            return false;
        }

        // Store the point inside THIS node.
        if (this.points.length < this.capacity) {

            this.points.push(point);

            return true;
        }

        // If the node is full, divide THIS node.
        if (!this.divided) {
            this.subdivide();
        }

        // Try inserting into THIS node's children.
        return (
            this.northWest.insert(point) ||
            this.northEast.insert(point) ||
            this.southWest.insert(point) ||
            this.southEast.insert(point)
        );
    }


    // ============================================
    // CHECK WHETHER POINT IS INSIDE NODE
    // ============================================

    contains(point) {

        // this.x and this.y refer to the coordinates
        // belonging to THIS specific quadrant.

        return (
            point.x >= this.x &&
            point.x < this.x + this.width &&
            point.y >= this.y &&
            point.y < this.y + this.height
        );
    }


    // ============================================
    // SUBDIVIDE QUADRANT
    // ============================================

    subdivide() {

        // Half the size of THIS quadrant.
        const halfWidth = this.width / 2;
        const halfHeight = this.height / 2;

        // Create four children.

        this.northWest = new QuadTreeNode(
            this.x,
            this.y,
            halfWidth,
            halfHeight
        );

        this.northEast = new QuadTreeNode(
            this.x + halfWidth,
            this.y,
            halfWidth,
            halfHeight
        );

        this.southWest = new QuadTreeNode(
            this.x,
            this.y + halfHeight,
            halfWidth,
            halfHeight
        );

        this.southEast = new QuadTreeNode(
            this.x + halfWidth,
            this.y + halfHeight,
            halfWidth,
            halfHeight
        );

        // THIS node has now been divided.
        this.divided = true;
    }


    // ============================================
    // DISPLAY THE NODE
    // ============================================

    display(ctx) {

        // Draw THIS quadrant.
        ctx.strokeRect(
            this.x,
            this.y,
            this.width,
            this.height
        );

        // Draw all points belonging to THIS node.
        for (const point of this.points) {

            ctx.fillRect(
                point.x,
                point.y,
                4,
                4
            );
        }

        // If THIS node has children,
        // display each child.
        if (this.divided) {

            this.northWest.display(ctx);
            this.northEast.display(ctx);
            this.southWest.display(ctx);
            this.southEast.display(ctx);
        }
    }
}
