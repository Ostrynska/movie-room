import styled from 'styled-components';

export const CastSection = styled.section`
  padding: 1rem 0rem;
  color: #a3a3a3;
`;

export const CastImageWrapp = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  width: 160px;
  height: 220px;
`;

export const CastImage = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid #797979;
  border-radius: 2px;
  margin-bottom: 5px;
`;

export const CastListWrapp = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: stretch;
  justify-content: start;
`;

export const CastListItem = styled.li`
  max-width: 160px;
`;

export const TextWrapp = styled.div`
  padding-top: 5px;
`;

export const Text = styled.p`
  margin-top: 3px;
  font-size: 12px;
  color: #a3a3a3;
  bottom: -61px;
  top: auto;
  max-width: 160px;
`;

export const TextAccent = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;
