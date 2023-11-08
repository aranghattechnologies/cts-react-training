export function NewsArticle({title,snapshot}){
    return(
        <>
            <strong>{title}</strong>
            <p>{snapshot}</p>
        </>
    )
}