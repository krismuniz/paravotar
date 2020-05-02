import { VoterDetailsResponse } from "../services/types"

export enum PracticaMobileStates {
  IDLE = "IDLE",
  LOADING_VOTER_DETAILS = "LOADING_VOTER_DETAILS",
  SELECTING_BALLOT = "SELECTING_BALLOT",
  INVALID_VOTER_ID = "INVALID_VOTER_ID",
  PRACTICE_IN_PROGRESS = "PRACTICE_IN_PROGRESS",
}

export enum PracticaMobileEventTypes {
  SEARCH_VOTER_ID = "SEARCH_VOTER_ID",
  BALLOT_SELECTED = "BALLOT_SELECTED",
}

export interface PracticaMobileContext {
  voterDetails?: VoterDetailsResponse
}