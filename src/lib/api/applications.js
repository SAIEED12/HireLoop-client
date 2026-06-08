import { serverFetch } from "../core/server"

export const getApplicationsByApplicant = async (applicantId) =>{
    return serverFetch(`/api/applicatuibs?applicantId=${applicantId}`)
}