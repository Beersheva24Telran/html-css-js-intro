//{thumbnailImg: string, detailedImg: string; thumbnailTitle: string; detailedTitle: string}
class MockService {
    async getData() {
        
        const res = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await res.json();
        return console.log(data);
    }
}
const serviceObj = new MockService();
export default serviceObj;