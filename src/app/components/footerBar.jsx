export default function FooterBar () {

    const heartDROPBOOST = "💜"

    const data = new Date()
    const formattata = data.toLocaleDateString("it-IT", {
    year: "numeric"
    });

    return (
        <>
            <div id="footer" className="bg-stone-200/90 text-[0.7rem] text-stone-600 flex h-[5vh] w-screen justify-center items-center p-3">{formattata} © SANDRO BARRASSO powered {heartDROPBOOST}<a href="https://www.dropboost.it" >dropboost.it</a></div>
        </>
    )

}