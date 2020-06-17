import { Label } from './label.model';

export class Issue {
    active_lock_reason: any
    assignee: any
    assignees: Array<any>
    author_association: string
    body: string
    closed_at: number
    comments: 4
    comments_url: string
    created_at: string
    events_url: string
    html_url: string
    id: number
    labels: Array<Label>
    labels_url: string
    locked: boolean
    milestone: number
    node_id: string
    number: number
    repository_url: string
    state: string
    title: string
    updated_at: string
    url: string
}