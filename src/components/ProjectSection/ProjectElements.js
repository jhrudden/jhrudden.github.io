import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff 50%;
`;

export const TopWrapper = styled.div`
  height: 500px;
  width: 100%;
  display: block;
  background-color: #003644;
  align-items: center;
`;

export const TextWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: auto;
  max-width: 700px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    max-width: 400px;
    transition: 1s ease-in-out;
  }
`;

export const ProjectH1 = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  font-weight: 800;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
  }
`;

export const ProjectP = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 1rem;
    transition: 0.2s ease-in-out;
  }
`;

export const GridPadding = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(300px, auto) 100%;
  box-sizing: border-box;
  align-items: center;
  justify-items: center;
  margin-top: -15rem;
  grid-gap: 1rem;
  padding: 16px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
`;

export const ProjectContentWrapper = styled.div`
  padding: 60px 40px;
`;

export const CardH1 = styled.h1`
  max-width: 100%;
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  font-weight: 800;
`;

export const CardP = styled.h1`
  font-size: 1rem;
  color: #000;
  text-align: center;
  font-weight: 300;
  margin-bottom: 2rem;
`;