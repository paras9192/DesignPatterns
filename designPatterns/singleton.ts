export class SingleTon {
    private static instance: SingleTon = null;
    private static count: number = 0;

    // Private constructor to prevent direct instantiation
    private constructor() {
        SingleTon.count++;
    }

    // Static method to get the single instance of the class
    public static getInstance(): SingleTon {
        if (SingleTon.instance === null) {
            SingleTon.instance = new SingleTon();
        }
        return SingleTon.instance;
    }

    // Static method to get the count of instances
    public static getCount(): number {
        return SingleTon.count;
    }
}
