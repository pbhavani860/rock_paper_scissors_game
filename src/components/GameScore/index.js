import {
  GameScoreContainer,
  GameScoreNameContainer,
  GameScoreName,
  GameScoreBoardContainer,
  GameScoreHeading,
  GameScoreBoardScore,
} from './styledComponent'

const GameScore = props => {
  const {score} = props

  return (
    <GameScoreContainer>
      <GameScoreNameContainer>
        <GameScoreName>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </GameScoreName>
      </GameScoreNameContainer>
      <GameScoreBoardContainer>
        <GameScoreHeading>Score</GameScoreHeading>
        <GameScoreBoardScore>{score}</GameScoreBoardScore>
      </GameScoreBoardContainer>
    </GameScoreContainer>
  )
}

export default GameScore
