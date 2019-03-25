import React from 'react';
import styled from 'styled-components'

const API_IMAGE500_URL =   "https://image.tmdb.org/t/p/w500";
const API_IMAGELARGE_URL = "https://image.tmdb.org/t/p/original";

const Content =  styled.section`    
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${API_IMAGELARGE_URL}${props => props.poster});
    box-shadow: inset()

`;

const MovieBg = styled.div`
    display:flex;
    background-image: radial-gradient(circle at 20% 50%, rgba(1.18%, 2.35%, 4.31%, 0.98) 0%, rgba(18.82%, 26.67%, 30.20%, 0.88) 100%);
`;

const Poster = styled.div`
    width: 300px;
    height: 450px;
    margin: 20px;
    img {  
        height: 100%;
    };
`;

const HeaderPosterWrapper = styled.div`
    display: flex;
    min-height: 450px;
    color: #fff;
`;

const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    width: 700px;
    box-sizing: border-box;
    padding-left: 40px;
    div.title {
        width 100%;        
        margin-bottom: 30px;
    };
`;

const GenresColumn = styled.section`
    width: 260px;
    h4 {
        font-size: 1.1em;
        font-weight: 600;
        margin-bottom: 10px;
    };
`;


export default function MovieDetails({data}) {
    return (
        <Content poster={`${data.backdrop_path}`}>
                    <MovieBg>
                        <Poster>                                 
                            <img className="poster" src={`${API_IMAGE500_URL}${data.poster_path}`} alt="Test" />
                        </Poster>                    
                        <HeaderPosterWrapper>
                            <Header>
                                <div className="title">
                                    <h1> {data.title} </h1> <span><h5>{data.release_date}</h5></span>
                                </div>
                                <GenresColumn>
                                    <h4>Genres</h4>
                                </GenresColumn>
                                <div className="header_info">
                                    <h3> Overview  </h3>
                                    {data.overview}
                                </div>
                            </Header>
                        </HeaderPosterWrapper>
                    </MovieBg>
                </Content>            

    );
}