import {configure} from '@codegenie/serverless-express'
import app from './server.ts'

export const handler = configure({app})