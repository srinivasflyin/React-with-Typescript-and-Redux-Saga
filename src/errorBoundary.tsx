import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    state = { hasError: false }
    constructor(props: any) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error: any) {
        console.log('error', error)
        return { hasError: true }
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log('eeeerror', error, errorInfo)
    }
    render() {
        if (this.state.hasError) {
            return (<div><h1>Something went wrong</h1></div>)
        }
        return this.props.children
    }
}